const actionTypeCSS = `
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
    console.groupCollapsed(`%cACTION TYPE ${action.type}`, actionTypeCSS);
    console.groupCollapsed('%c before', prevCSS);
    console.log(this.beforeState);
    console.groupEnd();
    console.groupCollapsed('%c reducer', payloadCSS);
    console.log(action);
    console.groupEnd();
    console.groupCollapsed('%c after', nextCSS);
    console.log(state);
    console.groupEnd();
    console.groupEnd();
  }
};
export default logger;
