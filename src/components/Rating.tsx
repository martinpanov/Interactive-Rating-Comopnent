import { useState } from 'react';
import styles from './Rating.module.css';
import ThankYou from './ThankYou';

export default function Rating() {
    const [rating, setRating] = useState<number>(0);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleRating = (rating: number) => {
        setRating(rating);
    };

    const handleSubmit = () => {
        if (!rating) {
            return;
        }
        setIsSubmitted(true);
    };

    return (
        <>
            {isSubmitted ?
                <ThankYou rating={rating} />
                :
                <div className={styles["rating"]}>
                    <img src="/icon-star.svg" alt="star" />

                    <h2>How did we do?</h2>

                    <p>Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our offering!
                    </p>

                    <div className={styles["ratingCircles"]}>
                        {[1, 2, 3, 4, 5].map((rating, index) => {
                            if (rating === 1) {
                                return <button key={index} className={styles["one"]} onClick={() => handleRating(rating)}>{rating}</button>;
                            } else {
                                return <button key={index} onClick={() => handleRating(rating)}>{rating}</button>;
                            }

                        })}
                    </div>

                    <button className={styles["submit"]} onClick={handleSubmit}>SUBMIT</button>
                </div>

            }
        </>);
}