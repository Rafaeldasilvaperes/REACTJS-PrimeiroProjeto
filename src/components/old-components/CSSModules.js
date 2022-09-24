import styles from './CSSModules.module.css';

export const CSSModules = () => {
  return (
    <>
      <h2 className={styles['my-title']}>My Title</h2>
      <p className={styles.p_for_paragraph}> - But usually go for underscore instead of hifen:</p>
      <h2 className={styles.my_title}>My Title</h2>

    </>
  )
}