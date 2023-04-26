import styles from './Rating.module.css';

export default function Rating() {
    return (
        <div className={styles["rating"]}>
            <img src="/public/icon-star.svg" alt="star" />

            <h2>How did we do?</h2>

            <p>Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>

            <div className={styles["ratingCircles"]}>
                <button className={styles["one"]}>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
            </div>

            <button className={styles["submit"]}>SUBMIT</button>
        </div>
    );
}