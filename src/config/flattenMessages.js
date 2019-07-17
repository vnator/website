import { assoc } from 'ramda';

function flattenMessages(nestedMessages, prefix = '') {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      return assoc(prefixedKey, value, messages);
    }

    return Object.assign(messages, flattenMessages(value, prefixedKey));
  }, {});
}

export { flattenMessages };
