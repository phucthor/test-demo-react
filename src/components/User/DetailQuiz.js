import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getDataQuiz } from '../../services/apiServices';
import _ from 'lodash';
import "./DetailQuiz.scss";
import Question from './Question';
const DetailQuiz = (props) => {
    // const { id } = useParams();
    // console.log("check id:", id);
    const params = useParams();
    const location = useLocation();
    // console.log("check params:", params);
    const quizId = params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0); // index of question

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
                                item.answers.isSelected = false;
                                answers.push(item.answers);
                                // console.log('item answers:', item.answers);
                                // item.answers = JSON.parse(item.answers);
                            });
                            // console.log('value:', value, ' key:', key);
                            
                            return { questionId: key, answers : answers, questionDescription, image}
                        })
                        .value();
            // console.log("check data:", data);
            setDataQuiz(data);
        }
    }

    console.log("check dataQuiz:", dataQuiz);

    const handlePrev = () => {
        if (index - 1 < 0) return;
        if (dataQuiz && index <= dataQuiz.length - 1) {
            setIndex(index - 1);
        }
    }
    const handleNext = () => {
        if (dataQuiz && index < dataQuiz.length - 1) {
            setIndex(index + 1);
        }
    }

    const handleCheckbox = (answerId, questionId) => {
        console.log('check answerId:', answerId, ' questionId:', questionId);
        let dataQuizClone = _.cloneDeep(dataQuiz); // react hook does not detect change if we just modify the array directly
        let question = dataQuizClone.find(item => +item.questionId === +questionId);
        if (question && question.answers) {
            question.answers = question.answers.map(item => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            // console.log('check b ', b);
            // console.log('check question:', question);
            // question.answers = b;
        }

        let indexQ = dataQuizClone.findIndex(item => +item.questionId === +questionId);
        if (indexQ > -1) {
            dataQuizClone[indexQ] = question;
            setDataQuiz(dataQuizClone);
        }

        console.log('check dataQuizClone:', dataQuizClone);
    }

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    Quiz {quizId} : {location?.state?.quizTitle}
                </div>
                <hr/>
                <div className="q-body">
                    {/* <image src="" /> */}
                </div>
                <div className="q-content">
                    <Question 
                        index={index}
                        handleCheckbox={handleCheckbox}
                        data={ 
                            // check if dataQuiz is not empty
                            dataQuiz && dataQuiz.length > 0 
                            ? 
                            dataQuiz[index] 
                            : []
                            }
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-secondary"
                        onClick={() => handlePrev()}
                    >Prev</button>
                    <button className="btn btn-primary"
                        onClick={() => handleNext()}
                    >Next</button>
                    <button className="btn btn-warning"
                        onClick={() => handleNext()}
                    >Finish</button>
                </div>
            </div>

            <div className="right-content">
                count down
            </div>
                
        </div>
    );
}

export default DetailQuiz;