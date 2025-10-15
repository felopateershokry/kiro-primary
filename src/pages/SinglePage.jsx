import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dummyData } from './../assets/assets';
import './Single5odam.css'

const SinglePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const studentData = dummyData.find((item) => item.student._id === id)?.student;

    if (!studentData) {
        return (
        <div className="single-container">
            <h2>البيانات غير موجودة</h2>
            <button onClick={() => navigate("/list")} className="back-btn">
            العودة إلى القائمة
            </button>
        </div>
        );
    }

    return (
        <div className="single-container">
            <div className="single-card">
                <img
                src={studentData.imageUrl}
                alt={studentData.name}
                className="student-img"
                />
                <div className="student-info">
                <h1 className="student-name">{studentData.name}</h1>
                {/* <p><span> الهاتف:</span> {studentData.phone}</p> */}
                <p><span> العنوان:</span> {studentData.address}</p>
                <p><span> تاريخ الميلاد:</span> {studentData.date}</p>

                <button className="back-btn" onClick={() => navigate("/list")}>
                    ⬅ العودة إلى القائمة
                </button>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;
