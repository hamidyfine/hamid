import classNames from 'classnames';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import rangeParser from 'parse-numeric-range';
// import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

type TProps = {
  content?: string
  className?: string
}

type TMarkdownComponentsProps = {
    node: any;
    inline: boolean;
    className: string;
    props: any;
    children: any;
};

const MarkdownContent = ({ content, className }: TProps) => {
    if (!content) {
        return null;
    }

    const MarkdownComponents: object = {
        code({ node, className, ...props }: TMarkdownComponentsProps) {
            const hasLang = /language-(\w+)/.exec(className || '');
            const hasMeta = node?.data?.meta;

            const applyHighlights: object = (applyHighlights: number) => {
                if (hasMeta) {
                    const result = {
                        data : '',
                        class: '',
                    };
                    const RE = /{([\d,-]+)}/;
                    const metadata = node.data.meta?.replace(/\s/g, '');
                    const strLineNumbers = RE?.test(metadata) ? RE?.exec(metadata)![1] : '0';
                    const highlightLines = rangeParser(strLineNumbers);
                    if (highlightLines.includes(applyHighlights)) {
                        result['data'] = 'highlight2222';
                        result['class'] = 'block bg-zinc-700';
                    } else {
                        result['class'] = 'block';
                    }
                    return result;
                } else {
                    return {};
                }
            };

            return hasLang ? (
                <SyntaxHighlighter
                    style={dracula}
                    language={hasLang[1]}
                    PreTag="div"
                    className="codeStyle"
                    showLineNumbers={true}
                    wrapLines={hasMeta}
                    useInlineStyles={true}
                    lineProps={applyHighlights}
                >
                    {props.children}
                </SyntaxHighlighter>
            ) : (
                <code className={className}
                    {...props}
                />
            );
        },
    };

    return (
        <ReactMarkdown
            className={classNames('prose prose-neutral prose-p:mb-0 prose-p:mt-0 hover:prose-a:text-purple-500 w-100 mx-0 max-w-full prose-pre:bg-inherit prose-pre:p-0', className)}
            components={MarkdownComponents}
        >
            {content}
        </ReactMarkdown>
    );
};

export default MarkdownContent;
