---
title: Playground
alwaysopen: true
weight: 2
---
Don't want to go through *any* setup but still want to experiment with Workers? The Workers Playground is a simple, instant way to preview and test code directly in the browser against any site.

### [Launch Playground](https://cloudflareworkers.com/)

## Previewing a Script

### Write

Replace the pre-filled script with whatever logic fits your needs:

```javascript
addEventListener('fetch', event => {
  event.respondWith(handlerWithMyLogic(event.request))
})

async function handlerWithMyLogic(request) {
  return new Response('hello world')
}
```

For more on writing the code that will run your Workers script see: [How to Write a Workers Script](/quickstart/write_scripts).

### Update

When you have code you are ready to test, click the button to preview at the bottom of the script panel.

Now you can see a preview of that code running on the right as it would in a browser. Enter your web site's address in the right section to preview the Workers script running on that site.

You can modify the script and click the preview button to view the effect on the request.

To test a raw HTTP request - not in an HTML previewer e.g. testing a POST request - go to the test tab in the previewer.  To run the HTTP preview, we will need to click update preview and run test.

New edits will not yet be saved or deployed.

### Dev Tools

For debugging Workers script, check out the developer tools at the bottom of the preview panel. The developer tools for Workers previewer works similar to the developer tools in Chrome or Firefox.

![console](/reference/tooling/media/console.png)

#### Network tab

Shows the outgoing requests from your Workers script (i.e. any calls to `fetch` that live in your script).

#### Console Logs

Outputs any calls to `console.log` that were called for the current preview run as well as any other preview runs in that session

#### Sources

The sources that make up your Workers script. Note currently there can only be one. TODO: is this true?? may just want to remove


## Deploy

There are two ways to preview and deploy a Workers script: on [a site on Cloudflare](https://support.cloudflare.com/hc/en-us/articles/201720164) or on a [workers.dev](https://workers.dev/) account. If you'd like to only explore Workers capabilities, you can avoid any setup through the [playground](#playground).

### Cloudflare Dashboard

To preview a script, begin by [logging in](https://www.cloudflare.com/a/login) to your Cloudflare dashboard.

After selecting an account and/or zone to deploy the Worker script to, navigate to the approriate Workers section.

- For workers.dev:
  ![Navigate workers.dev](/reference/tooling/media/navigate-workers-dev.png)

  For a zone on Cloudflare:
  ![Navigate zone](/reference/tooling/media/navigate-zone.png)

You will see options to edit existing Workers scripts or create new scripts.

To make your Workers script live, click "Save and Deploy".

## How the Preview Tool Works

The previewer tool works by spinning up a mock instance of the [V8 engine](/reference/runtime) outside of Cloudflare's network. Workers created in the Playground are only for experimentation and don’t run on all of Cloudflare’s infrastructure around the world.

### Key Differences from Production

While the preview tool is powerful in development, the tool must run as a mock proxy service so there are some inherent limitations.

The key differences of the previewer versus a live Workers script are:

- Subrequests ( i.e. fetches inside your Workers script) that call the same hostname as the original request will run in the previewer as an external request (i.e. goes back to the front line of Cloudflare), as those subrequests in production will go directly to the origin.
- Not all [Standard APIs](/reference/runtime/standard_apis) are avalible in the previewer that are in production.
- The output of `console.log` acts as a no-op in production.
