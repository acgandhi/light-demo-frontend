<svelte:head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-E2SEHVKFMC"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-E2SEHVKFMC');
    </script>

    <title>Light Demo</title>
</svelte:head>

<script>
    import { onMount } from "svelte";

    import { Button, Spinner } from 'sveltestrap';

    const endpoint = "https://liapi.acgandhi.com/light";

    let colorGen = (isOn) => {return isOn ? "warning" : "dark"};
    let buttonTextGen = (isOn) => {return isOn ? "Light On 💡" : "Light Off"};
    let outlineGen = (isOn) => {return isOn ? "" : ""};

    let isOn = false;

    let color = colorGen(isOn);
    let outline = outlineGen(isOn);
    let buttonText = buttonTextGen(isOn);

    let spinnerVisible = false;
    let buttonDisabled = false;

    onMount(async function () {
        const response = await fetch(endpoint);
        const data = await response.json();
        isOn = data.state;

        color = colorGen(isOn);
        outline = outlineGen(isOn);
        buttonText = buttonTextGen(isOn);
    });

    
    async function toggle() {
        spinnerVisible = true;
        buttonText = "Toggling";
        buttonDisabled = true;
        isOn = !isOn;

        console.log(JSON.stringify({
                state: isOn
            }));

        await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                state: String(isOn)
            })
        })

        // sleep for 1000 ms
        await new Promise(r => setTimeout(r, 1000));

        const response = await fetch(endpoint);
        const data = await response.json();
        isOn = data.state;

        color = colorGen(isOn);
        outline = outlineGen(isOn);
        buttonText = buttonTextGen(isOn);

        spinnerVisible = false;
        buttonDisabled = false;
    };

    let updateButtonText = "Update";
    let updateButtonState = false;  // false: not updating, true: updating
    async function update() {
        updateButtonText = "Updating";
        updateButtonState = true;
        const response = await fetch(endpoint);
        const data = await response.json();
        isOn = data.state;

        color = colorGen(isOn);
        outline = outlineGen(isOn);
        buttonText = buttonTextGen(isOn);

        updateButtonText = "Update";
        updateButtonState = false;
    }
    
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">


<main>
    <div class="container text-start pt-2">
        <div class="text-start">
            <p class="fs-1">Amar's light-weight demo</p>
            <p>This is a demo of a couple services being run out of a Kubernetes homelab. 
                The stream itself is hosted on Twitch, while everything else you see, 
                including a python api server that responds to the button presses and communicates
                over Z-wave to a smart outlet, the front end code for this website, and even  
                the video connection to Twitch are all hosted on Kubernetes. </p>
            <p><b>Try me:</b> Click on the Light On/Off button to toggle the state of the light.</p>
        </div>
        <p><i>
            Note: There's a stream delay of ~10 seconds, so it might be a bit before you see the light toggle on stream.
            <br>
            You can also press the Update button to query the status of the light.
        </i></p>
        <Button disabled={buttonDisabled} {outline} {color} on:click={toggle}>
            {buttonText}
            {#if spinnerVisible == true}
                <span><Spinner size="sm" /></span>
            {:else}
                <span></span>
            {/if}
        </Button>
        <Button outline color="primary" on:click={update}>
            {#if updateButtonState == true}
                Updating
                <Spinner size="sm" />
            {:else}
                Update
            {/if}
        </Button>
        <div class="text-center p-2">
            <div class="iframe-container">
                <!-- <iframe class="responsive-iframe" src="https://www.youtube.com/embed/live_stream?channel=UC9euycJrHIDfFuXwQpHbOAA&autoplay=1" title="LightCam stream" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
                <iframe class="responsive-iframe" src="https://player.twitch.tv/?channel=weeeee12345&parent=light.acgandhi.com" frameborder="0" allowfullscreen="true" scrolling="no" ></iframe>
            </div>
        </div>
        <h5>Check out <a href="https://homelab.acgandhi.com">my blog</a> for how I set this up!</h5>
    </div>
</main>

<style>
    /* .container {
        max-width: 720px;
    }
    */
    .iframe-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    }

        /* Then style the iframe to fit in the container div with full height and width */
    .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .container {
        max-width: 700px;
    }
/* 
    @media (max-width: 640px) {
        iframe {
            width: 100%;
        }
    }  */
</style>
