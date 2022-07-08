class MyWatchPlugin {
    apply(jestHooks) {
        jestHooks.onTestRunComplete(results => {
          this._hasSnapshotFailure = results.snapshot.failure;
        });
      }

      getUsageInfo(globalConfig) {
        return {
          key: 's',
          prompt: 'do something',
        };
    }
    run(globalConfig, updateConfigAndRun) {
        // do something.
      }
  }