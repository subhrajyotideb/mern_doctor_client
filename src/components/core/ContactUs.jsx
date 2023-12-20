import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { PostContact } from '../../Redux/PostContactSlice';


const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [topic, setTopic] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(PostContact({ name, email, topic, phone, msg }));
  };

  return (
    <>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4"></div>
                <p className="mb-5">
                  Laboriosam exercitationem molestias beatae eos pariatur,
                  similique, excepturi mollitia sit perferendis maiores ratione
                  aliquam?
                </p>
              </div>
            </div>
          </div>

          <form id="contact-form" className="contact__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="topic"
                    id="topic"
                    onChange={(e) => setTopic(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Your Query Topic"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    name="phone"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    className="form-control"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group-2 mb-4">
              <textarea
                name="msg"
                id="msg"
                type="text"
                className="form-control"
                rows="8"
                placeholder="Your Message"
                onChange={(e) => setMsg(e.target.value)}
                required
              ></textarea>
            </div>

            <div>
              <input
                className="btn btn-main btn-round-full"
                name="submit"
                type="submit"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
