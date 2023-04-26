import * as React from 'react';
import cx from 'classnames';
import { IHasCX, IHasRawProps } from "@epam/uui-core";
import css from './TextPlaceholder.scss';
import { PropsWithChildren } from "react";

export interface ITextPlaceholderProps extends IHasRawProps<React.HTMLAttributes<HTMLDivElement>>, IHasCX {
    wordsCount?: number;
    isNotAnimated?: boolean;
}

export type TextPlaceholderProps = PropsWithChildren<ITextPlaceholderProps>;

export const TextPlaceholder: React.FunctionComponent<PropsWithChildren<ITextPlaceholderProps>> = (props) => {
    const pattern =  `&nbsp;`;
    const text = React.useMemo(() => {
        const words = [];
        for (let i = 0; i < (props.wordsCount || 1); i++) {
            let lengthWord = Math.floor(Math.random() * 10 + 8);
            words.push(pattern.repeat(lengthWord));
        }
        return words;
    }, [props.wordsCount]);

    return (
        <div aria-busy={ true } className={ css.container } { ...props.rawProps }>{
            text.map((it: string, index: number) => (
                <span
                    key={ index }
                    className={ cx([
                        props.cx,
                        css.loadingWord,
                        !props.isNotAnimated && css.animatedLoading,
                    ]) }
                    dangerouslySetInnerHTML={ {__html: it} }
                />
            )) }
        </div>
    );
};
