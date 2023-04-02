import classNames from 'classnames';

type TProps = {
    className?: string;
};

const Container = ({ children, className }: React.PropsWithChildren<TProps>) => {
    return (
        <div className={classNames('container mx-auto', className)}>
            {children}
        </div>
    );
};

export default Container;
