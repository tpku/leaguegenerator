import styles from "./styles.module.css";
/* Define class name in filename.module.css, assign "style="class name" " when calling component for different styling */

const ContentWrapper = (props) => {
    const { children } = props;
    return (
        <>
            <div className={styles[props.styles]}>{children}</div>
        </>
    );
};
export default ContentWrapper;
