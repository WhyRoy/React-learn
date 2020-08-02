import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn:
      "https://6bf6c2b74d974505a4deb66cfaaffc22@o414618.ingest.sentry.io/5305341",
  });
}
function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
