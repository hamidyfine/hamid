import classNames from 'classnames';

type Props = {
  content?: string
  className?: string
}

const MarkdownContent = ({ content, className }: Props) => {
    if (!content) {
        return null;
    }

    return (
        <div
            className={classNames('prose w-100 mx-0 max-w-full', className)}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default MarkdownContent;
