import React from 'react';
import PropTypes from 'prop-types';

const Image = ({image}) => {

    // Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views, comments, user } = image;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card border-dark bg-light rounded-top shadow-lg">
                <img src={previewURL} alt={tags} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text text-center text-dark"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i> Likes: {likes}</p>
                    <p className="card-text text-center text-dark"><i class="fa fa-eye" aria-hidden="true"></i> Views: {views}  Views </p>
                    <p className="card-text text-center text-dark"><i class="fa fa-comments" aria-hidden="true"></i> Comments: {comments}</p>
                    <p className="card-text text-center text-dark font-weight-bold">  Upload by:  {user} </p>
                </div>
                <div className="card-footer">
                    <a
                        href = {largeImageURL}
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "btn btn-outline-dark btn-block shadow"
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}

Image.propTypes = {
    image: PropTypes.object.isRequired
}
 
export default Image;