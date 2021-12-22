import * as yup from 'yup';
import { AnyObject, Maybe } from 'yup/lib/types';

/* eslint-disable func-names */

yup.addMethod<yup.DateSchema>(
    yup.date,
    'format',
    function (formatter: DateFormatter) {
        return this.transform(function (value: Date, originalValue: string) {
            if (this.isType(value)) {
                return value;
            }

            const formatted = formatter(originalValue);

            // If the original value can be formatted as a Date, return it as a Date; otherwise
            // return an invalid Date by returning `new Date('')`
            return formatted ?? new Date('');
        });
    },
);

declare module 'yup' {
    interface DateSchema<
        TType extends Maybe<Date>,
        TContext extends AnyObject = AnyObject,
        TOut extends TType = TType,
    > extends yup.BaseSchema<TType, TContext, TOut> {
        format(formatter: DateFormatter): DateSchema<TType, TContext>;
    }
}

export default yup;
