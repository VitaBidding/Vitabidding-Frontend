import React, { useState } from "react";
import styled from "styled-components";
import { BsCamera } from "react-icons/bs";
function EnrollmentThumbnail({ item, setItem }) {
  const [Thumbnail, setThumbnail] = useState(null);
  const handleThumbnailChange = (event) => {
    const imageFile = event.target.files[0];

    if (imageFile) {
      // FileReader로 이미지 읽기
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // 이미지 크기 조정 (예: 600px 고정 너비)
          const maxWidth = 600;
          const scale = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scale;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // canvas에서 PNG로 변환
          canvas.toBlob(
            (blob) => {
              // PNG 형식의 blob 생성
              const pngFile = new File(
                [blob],
                imageFile.name.replace(/\.\w+$/, ".png"),
                {
                  type: "image/png",
                }
              );

              // PNG 파일을 FormData에 추가
              const formData = new FormData();
              formData.append("thumbnail", pngFile);

              // 미리보기 업데이트
              const readerForPreview = new FileReader();
              readerForPreview.onloadend = () => {
                setThumbnail(readerForPreview.result);
              };
              readerForPreview.readAsDataURL(pngFile);

              // setItem 호출 (업데이트된 PNG 파일 전송)
              setItem((prevItem) => ({ ...prevItem, thumbnail: formData }));
            },
            "image/png" // 파일 형식을 PNG로 지정
          );
        };
      };

      reader.readAsDataURL(imageFile);
    }
  };
  return (
    <ThumbnailSection>
      <Thumbnaillabel>썸네일 사진</Thumbnaillabel>
      <Thumbnailcontents>
        <ThumbnailInput
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/jpeg,image/png"
          onChange={handleThumbnailChange}
        />
        {!item.thumbnail && (
          <Thumbnaillabelno htmlFor="thumbnail">
            <BsCamera
              style={{ width: "100px", height: "100px", color: "#fd9800" }}
            />
            No Image
          </Thumbnaillabelno>
        )}
        {item.thumbnail && (
          <Thumbnaillabelfor htmlFor="thumbnail">
            <ThumbnailWrapper>
              <Thumbnailimg src={Thumbnail} alt="" />
            </ThumbnailWrapper>
          </Thumbnaillabelfor>
        )}
      </Thumbnailcontents>
    </ThumbnailSection>
  );
}

export default EnrollmentThumbnail;

const ThumbnailSection = styled.div`
  width: 100%;
  height: 100%;
  font-family: "KBO-Dia-Gothic_medium";
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Thumbnaillabel = styled.label`
  font-weight: bold;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;

  @media only screen and (max-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    font-size: 7pt;
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
    font-size: 9pt;
  }
  @media only screen and (min-width: 420px) {
    font-size: 12pt;
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 3px 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const Thumbnailcontents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 88%;

  @media only screen and (max-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 280px) {
    padding: 0;
  }
  @media only screen and (min-width: 360px) {
  }
  @media only screen and (min-width: 420px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 0 10px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1480px) {
  }
`;
const ThumbnailInput = styled.input`
  display: none;
`;
const Thumbnaillabelno = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 12pt;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid lightgray;
  color: #495057;
  background-color: #f8f9fa;
  &:hover {
    color: #000;
    background-color: #e9ecef;
    cursor: pointer;
  }
`;

const Thumbnaillabelfor = styled.label`
  height: 100%;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ThumbnailWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

const Thumbnailimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* 한쪽 축에 맞게 이미지 표시 */
  background-repeat: no-repeat;
  background-size: contain; /* 배경 이미지 사이즈 조정 */
`;
