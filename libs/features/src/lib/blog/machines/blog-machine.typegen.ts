// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  eventsCausingActions: {
    updateBlogsContext: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
  };
  internalEvents: {
    'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]': {
      type: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    fetchMD: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    services: 'fetchMD';
    guards: never;
    delays: never;
  };
  eventsCausingServices: {
    fetchMD: 'xstate.init';
  };
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'FetchingBlogs'
    | 'FetchingBlogs.FetchingMD'
    | 'FetchingBlogs.FetchingMD.Fetching'
    | 'FetchingBlogs.FetchingMD.Done'
    | 'FetchingBlogs.FetchingMD.Error'
    | 'Done'
    | {
        FetchingBlogs?:
          | 'FetchingMD'
          | {
              FetchingMD?: 'Fetching' | 'Done' | 'Error';
            };
      };
  tags: never;
}
