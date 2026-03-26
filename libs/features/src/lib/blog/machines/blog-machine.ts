import { createMachine, assign } from 'xstate';
import { BlogItem } from '../interfaces/blog';

export const blogMachine =
  createMachine(
    {
      predictableActionArguments: true,
      context: { blogs: [] },
      tsTypes: {} as import('./blog-machine.typegen').Typegen0,
      schema: {
        context: {} as { blogs: BlogItem[] },
        events: {} as
          | {
              type: 'done.invoke.blogMachine.FetchingBlogs.FetchingMD.Fetching:invocation[0]';
              data: BlogItem[];
            }
          | {
              type: 'UPDATE';
              data: BlogItem[];
            }
          | {
              type: 'ERROR';
            },
      },
      initial: 'FetchingBlogs',
      id: 'blogMachine',
      states: {
        FetchingBlogs: {
          type: 'parallel',
          states: {
            FetchingMD: {
              initial: 'Fetching',
              states: {
                Fetching: {
                  invoke: {
                    src: 'fetchMD',
                    onDone: [
                      {
                        actions: 'updateBlogsContext',
                        target: 'Done',
                      },
                    ],
                    onError: [
                      {
                        target: 'Error',
                      },
                    ],
                  },
                },
                Done: {
                  type: 'final',
                },
                Error: {
                  type: 'final',
                },
              },
            },
          },
          onDone: {
            target: 'Done',
          },
        },
        Done: {},
      },
    },
    {
      actions: {
        updateBlogsContext: assign((ctx, event) => {
          return {
            blogs: [...ctx.blogs, ...event.data],
          };
        }),
      },
    }
  );
