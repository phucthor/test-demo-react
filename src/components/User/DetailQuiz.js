import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
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
        // console.log("check res questions:", res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                        // Group the elements of Array based on `color` property
                        .groupBy("id")
                        // `key` is group's name (id), `value` is the array of objects
                        .map((value, key) => {
                            let answers = [];
                            let questionDescription, image = null;
                            value.forEach((item, index) => {
                                if (index === 0) {
                                    questionDescription = item.description;
                                    image = item.image;
                                }
                                answers.push(item.answers);
                                // console.log('item answers:', item.answers);
                                // item.answers = JSON.parse(item.answers);
                            });
                            console.log('value:', value, ' key:', key);
                            
                            return { questionId: key, answers : answers, questionDescription, image}
                        })
                        .value();
            console.log("check data:", data);
        }
    }

    return (
        <div className="detail-quiz-container">
            Detail Quiz
        </div>
    );
}

export default DetailQuiz;