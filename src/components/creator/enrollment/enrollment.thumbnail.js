import React, { useState } from "react";
import styled from "styled-components";
import { BsCamera } from "react-icons/bs";

function EnrollmentThumbnail({ item, setItem }) {
  const [thumbnails, setThumbnails] = useState([]);

  const handleThumbnailChange = (event) => {
    const imageFiles = Array.from(event.target.files);

    imageFiles.forEach((imageFile, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 600;
          const scale = maxWidth / img.width;
          canvas.width = maxWidth;
          canvas.height = img.height * scale;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob((blob) => {
            const pngFile = new File([blob], `image${index + 1}.png`, {
              type: "image/png",
            });

            const newThumbnail = {
              file: pngFile,
              preview: URL.createObjectURL(pngFile),
            };

            setThumbnails((prevThumbnails) => [
              ...prevThumbnails,
              newThumbnail,
            ]);
            setItem((prevItem) => ({
              ...prevItem,
              images: [
                ...prevItem.images,
                {
                  file: pngFile,
                  imageUrl: `image${index + 1}.png`,
                  isThumbnail: index === 0,
                },
              ],
            }));
          }, "image/png");
        };
      };
      reader.readAsDataURL(imageFile);
    });
  };

  return (
    <ThumbnailSection>
      <Thumbnailcontents>
        <ThumbnailInput
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/jpeg,image/png"
          onChange={handleThumbnailChange}
          multiple
        />
        {thumbnails.length === 0 && (
          <Thumbnaillabelno htmlFor="thumbnail">
            <BsCamera
              style={{ width: "100px", height: "100px", color: "#fd9800" }}
            />
            No Image
          </Thumbnaillabelno>
        )}
        {thumbnails.length > 0 && (
          <ThumbnailWrapper>
            {thumbnails.map((thumbnail, index) => (
              <Thumbnailimg
                key={index}
                src={thumbnail.preview}
                alt={`썸네일 ${index + 1}`}
              />
            ))}
          </ThumbnailWrapper>
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
