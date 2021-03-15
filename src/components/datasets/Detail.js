import React from 'react';

import Asset_7 from '../../assets/images/Asset_7.png';

import '../../assets/styles/datasetsDetail.css';

const DatasetsDetail = () => {
    const data =  {
        cates: ["bounding box", "segmentation", "polygon"],
        more : [{},{}]
    }

    return (
        <div className="datasetsDetail">
            <div className="datasetsDetail_title">
                <h2>Coco Datasets</h2>
                <p>
                    {
                        data.cates.map((cate, index)=>(
                            <span className="cate" key={index}>{cate}</span>
                        ))
                    }
                </p>
            </div>
            <div className="datasetsDetail_center">
                <div className="datasetsDetail_img">
                    <img src={Asset_7} alt="image"/>
                    <p className="btnArea"><span className="btn">View Datasets</span></p>
                </div>
                <p className="text">
                    Designers know what they are creating, but what, and how, do people really wear their products? What combinations of products are people using?
                </p>
            </div>
            <div className="datasetsDetail_more">
                <h3>More</h3>
                <ul className="lists">
                    {
                        data.more.map((index)=>(
                         <li className="list" key={index}>
                                <p className="more_img">
                                 <img src={Asset_7} />
                             </p>
                             <div className="list_text">
                                 <p className="list_title">Coco Datasets</p>
                                 <p className="list_type">
                                    <span className="cate">bounding box</span>
                                    <span className="cate">segmentation</span>
                                 </p>
                             </div>
                         </li>
                     ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default DatasetsDetail;