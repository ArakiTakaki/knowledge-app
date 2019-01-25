const actionTypeCSS = `
  font-size: 1.2em;
  font-weight: bold;
  padding: 0m 1em;
`;
const prevCSS = `
  color: royalblue;
  font-weight: bold;
  padding: 0m 1em;
`;
const payloadCSS = `
  color: saddlebrown;
  font-weight: bold;
  padding: 0m 1em;
`;
const nextCSS = `
  color: darkblue;
  font-weight: bold;
  padding: 0m 1em;
`;

const logger = {
  beforeState: {},
  before(state, action) {
    this.beforeState = state;
  },
  after(state, action) {
    console.group(`%cACTION TYPE ${action.type}`, actionTypeCSS);
    console.log('%cBefore', prevCSS);
    console.log(this.beforeState);
    console.log('%cPayload', payloadCSS);
    console.log(action);
    console.log('%cAfter', nextCSS);
    console.log(state);
    console.groupEnd();
  }
};
export default logger;
