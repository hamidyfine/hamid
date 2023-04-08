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
            className={classNames('prose prose-neutral prose-p:mb-0 prose-p:mt-0 hover:prose-a:text-purple-500 w-100 mx-0 max-w-full', className)}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default MarkdownContent;
