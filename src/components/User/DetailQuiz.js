import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
const DetailQuiz = (props) => {
    // const { id } = useParams();
    // console.log("check id:", id);
    const params = useParams();
    const quizId = params.id;

    useEffect(() => {
        // Fetch quiz details using quizId
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);
        console.log("check res questions:", res);
    }

    return (
        <div className="detail-quiz-container">
            Detail Quiz
        </div>
    );
}

export default DetailQuiz;