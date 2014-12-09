# globalconf

Experimenting with global conf sharing in kraken 1.0+ applications

## Background

In earlier versions of kraken, nconf was used to manage configuration. This meant that applications
could access the kraken configuration by importing nconf into any module and using the nconf state
to grab configuration.

With nconf being removed from kraken 1.0, now the application configuration is available via the
application lifecycle during the `config` event, and also via the `req.app.get` method during the
request lifecycle.

This leaves a "functionality" hole for upgraders to fill. This application is an exploration into
the best practices in filling that hole left by nconf.
