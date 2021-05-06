import React, {ChangeEvent, useState} from 'react'
import {Video} from '../videoList/interface'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

const VideoForm = () => {
  const [video, setVideo] = useState<Video>({
    title: "",
    description: "",
    url: ""
  })

  const handleChange = (e:InputChange) => {
    setVideo({
      ...video,
      [e.target.name]: e.target.value
    })
  } 
  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h3>New Video</h3>
            <form action="">
              <div style={{margin: '20px 10px'}}>
                <input
                  onChange={handleChange}
                  type="text"
                  name="title"
                  placeholder="Please input a title"
                  className="form-control"
                  autoFocus
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <input
                  onChange={handleChange}
                  type="text"
                  name="url"
                  placeholder="...someWeb.com"
                  className="form-control"
                />
              </div>
              <div style={{margin: '20px 10px'}}>
                <textarea
                  onChange={handleChange}
                  name="Description"
                  rows={3}
                  className="form-control"
                />
              </div>
              <button 
                className="btn btn-primary center"
                style={{marginLeft: '10px'}}
              >
                Create Video
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default VideoForm;