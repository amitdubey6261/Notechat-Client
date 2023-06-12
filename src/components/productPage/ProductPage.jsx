import React from "react";

import img from "../../assets/images/img1.png";

import "./ProductPage.css";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { display } = useSelector((state) => state.ProductPage);
    const { status, res } = useSelector(
        (state) => state.getProductDetailsReducer
    );

    const handleCloseBtn = () => {
        dispatch({
            type: "toggleProduct",
        });
    };

    if (status) {
        return (
            <div
                className="product-wrapper"
                style={{ display: display ? "flex" : "none" }}
            >
                <div className="close-btn" onClick={handleCloseBtn}>
                    X
                </div>
                <div className="product-content-wrapper">
                    <div className="product-content product-images">
                        <div className="product-img-wrap p-img1">
                            <img
                                className="product-image"
                                src={res.data.notes.thums.thum1.url}
                                alt="not -found"
                            />
                        </div>
                        <div className="product-img-wrap p-img2">
                            <img
                                className="product-image"
                                src={res.data.notes.thums.thum2.url}
                                alt="not -found"
                            />
                        </div>
                        <div className="product-img-wrap p-img3">
                            <img
                                className="product-image"
                                src={res.data.notes.thums.thum3.url}
                                alt="not -found"
                            />
                        </div>
                        <div className="product-img-wrap p-img4">
                            <img
                                className="product-image"
                                src={res.data.notes.thums.thum4.url}
                                alt="not -found"
                            />
                        </div>
                    </div>
                    <div className="product-content product-info">
                        <div className="info-container">
                            <div className="product-desc collage-name">
                                <div className="product-desc">
                                    collage name{" "}
                                    <span className="content-detail">
                                        {`${res.data.notes.collage}`}
                                    </span>
                                </div>
                            </div>
                            <div className="product-desc product-name">
                                <div className="product-desc">
                                    product name{" "}
                                    <span className="content-detail">
                                        {`${res.data.notes.subject}`}
                                    </span>
                                </div>
                            </div>
                            <div className="product-desc product-type">
                                <div className="product-desc">
                                    type of product{" "}
                                    <span className="content-detail">Amit Dubey</span>
                                </div>
                            </div>
                            <div className="product-desc created-by">
                                <div className="product-desc">
                                    created by{" "}
                                    <span className="content-detail">
                                        {`${res.data.notes.createdby}`}
                                    </span>
                                </div>
                            </div>

                            <div className="border"></div>
                            <button className="buy-now-btn">buy now</button>
                            <div className=" product-desc product-index">
                                index
                                <p className="product-index-content">
                                    {`${res.data.notes.aboutpdf}`}
                                </p>
                            </div>
                            <div className=" product-desc product-index">
                                index
                                <p className="product-index-content">
                                    {`${res.data.notes.index}`}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <div>NOT UPDATED</div>;
    }
};

export default ProductPage;
