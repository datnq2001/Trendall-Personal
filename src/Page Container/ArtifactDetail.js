//ArtifactDetail.js
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams, Link, useNavigate } from "react-router-dom";
import vases from "../Data/Vase"; // Import dữ liệu vases
import Header from "../Components/HomeScreen/Header";
import Footer from "../Components/HomeScreen/Footer";

function ArtifactDetail(returnpage) {
  const isLoggedIn = useSelector(state => state.auth.loggedIn);
  const { referenceNo } = useParams(); // Lấy referenceNo từ URL
  const artifact = vases.find((vase) => vase["Reference No."] === referenceNo); // Tìm hiện vật với referenceNo tương ứng
  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  const handleBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  useEffect(() => {
    // Khởi tạo URL hình ảnh khi component được tải lần đầu
    if (artifact) {
      fetch(artifact.image)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          setImageUrl(url);
        })
        .catch(error => console.error("Error fetching image:", error));
    }
  }, [artifact]);

  const handleDownloadImage = () => {
    if (isLoggedIn && imageUrl) {
      // Tạo một thẻ a để tải hình ảnh xuống
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = `artifact_${referenceNo}.png`;

      // Simulate click để tải hình ảnh xuống
      link.click();
    } else {
      // Hiển thị cảnh báo nếu chưa đăng nhập hoặc không có URL hình ảnh
      alert("Sign In or Create an account to Download Image");
      // You might want to navigate the user to the login page or display a login modal here
    }
  };

  // Kiểm tra xem hiện vật có tồn tại không
  if (!artifact) {
    return <div>Artifact not found!</div>;
  }

  return (
    <div className="app">
        <Header/>
        <div className="app__container">
            <div className="background--black-full"></div>
                <div className="grid-container">
                    <div className="white-text">
                    <h2 className="artifact-detail-heading"> Artifact Detail</h2>
                    <div className="container__link navigation-section__link" onClick={handleBack}>
                        <i className="container__link-icon fa-solid fa-circle-arrow-left"></i>
                        Return result research page
                    </div>
                        <div className="artifact-detail">
                            <div className="artifact-detail__image">
                                <img src={imageUrl} alt={`Vase ${artifact["Reference No."]}`} className="artifact-main-image"/>
                            </div>
                            <div className="artifact-detail__content">
                                <p className="artifact-detail__content-p"><strong>Reference No.:</strong> {artifact["Reference No."]}</p>
                                <p className="artifact-detail__content-p"><strong>Artifact Type:</strong> {artifact["Artifact Type"]}</p>
                                <p className="artifact-detail__content-p"><strong>Inventory ID:</strong> {artifact["Inventory ID"]}</p>
                                <p className="artifact-detail__content-p"><strong>Provenience:</strong> {artifact["Provenience"]}</p>
                                <p className="artifact-detail__content-p"><strong>Height:</strong> {artifact["Height"]}</p>
                                <p className="artifact-detail__content-p"><strong>Diameter:</strong> {artifact["Diameter"]}</p>
                                <p className="artifact-detail__content-p"><strong>Bibliographic References:</strong> {artifact["Bibliographic References"]}</p>
                                <p className="artifact-detail__content-p"><strong>Imagery Description:</strong> {artifact["Imagery Description"]}</p>
                                <p className="artifact-detail__content-p"><strong>Additional Notes:</strong> {artifact["Additional Notes"]}</p>
                                {/* Thêm các thông tin khác về hiện vật nếu cần */}
                                <button onClick={handleDownloadImage} className="download-image-button">Download Image</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  );
}

export default ArtifactDetail;
