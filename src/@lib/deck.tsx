import * as T from '@customTypes/Card';
import { SnapDeckCode } from '@customTypes/SnapDeckCode';

export const encode = ({ title, items }: { title: string; items: Array<T.Card> }): string => {
  const json: SnapDeckCode = { Name: title, Cards: [] };
  json.Cards = items?.map(v => {
    return { CardDefId: v.cardDefId };
  });
  const string = JSON.stringify(json);
  return Buffer.from(string, 'utf-8').toString('base64');
};

export const decode = (encoded: string): SnapDeckCode => {
  const string = Buffer.from(encoded, 'base64').toString('utf8');
  return JSON.parse(string);
};
