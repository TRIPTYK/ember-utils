import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface AsyncDataArgs {
  promise: Promise<unknown>;
  then?: (result: unknown, state: AsyncDataState) => void;
  catch?: (error: unknown, state: AsyncDataState) => void;
  finally?: (state: AsyncDataState) => void;
}

interface AsyncDataState {
  isResolved: boolean;
  isRejected: boolean;
  isPending: boolean;
  isSettled: boolean;
  result?: unknown;
  error?: unknown;
}

export default class AsyncData extends Component<AsyncDataArgs> {
  @tracked state: AsyncDataState = {
    isResolved: false,
    isRejected: false,
    isPending: true,
    isSettled: false,
  };

  constructor(owner: unknown, args: AsyncDataArgs) {
    super(owner, args);
    args.promise
      .then((result) => {
        this.state = {
          ...this.state,
          isResolved: true,
        };
        this.args.then?.(result, { ...this.state });
      })
      .catch((err) => {
        this.state = {
          ...this.state,
          isRejected: true,
        };
        this.args.catch?.(err, { ...this.state });
      })
      .finally(() => {
        this.state = {
          ...this.state,
          isSettled: true,
          isPending: false,
        };
        this.args.finally?.({ ...this.state });
      });
  }
}
