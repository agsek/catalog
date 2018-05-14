let isReady = false;
let promise: Promise<void>;


export function domReady(): Promise<void> {
    if (isReady) {
        return Promise.resolve();
    }

    if (promise) {
        return promise;
    }

    return promise = new Promise<void>((resolve) => {
        const ready = (): number | void => {
            if (!isReady && !document.body) {
                return window.setTimeout(ready, 1);
            }

            isReady = true;
            promise = null;

            resolve();
        };

        const completed = (): void => {
            document.removeEventListener('DOMContentLoaded', completed, false);
            window.removeEventListener('load', completed, false);

            if (ready) {
                ready();
            }
        };

        if (document.readyState !== 'loading') {
            ready();
        } else {
            document.addEventListener('DOMContentLoaded', completed, false);
            window.addEventListener('load', completed, false );
        }
    });
}
