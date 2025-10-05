import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
import "./DetailQuiz.scss";
const DetailQuiz = (props) => {
    // const { id } = useParams();
    // console.log("check id:", id);
    const params = useParams();
    const location = useLocation();
    console.log("check params:", params);
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
                        // Group the elements of Array based on `id` property
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
                            // console.log('value:', value, ' key:', key);
                            
                            return { questionId: key, answers : answers, questionDescription, image}
                        })
                        .value();
            // console.log("check data:", data);
        }
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <hr/>
                <div className="q-body">
                    <image src="" />
                </div>
                <div className="q-content">
                    <div className="question">Question 1: How are you doing?</div>
                    <div className="answer">
                        <div className="a-child">A. Answer 1</div>
                        <div className="a-child">B. Answer 2</div>
                        <div className="a-child">C. Answer 3</div>
                        <div className="a-child">D. Answer 4</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-secondary">Prev</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>

            <div className="right-content">
                count down
            </div>
                
        </div>
    );
}

export default DetailQuiz;