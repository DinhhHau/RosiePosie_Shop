import { Grid } from "@mui/material";
import { Button, Checkbox, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpg";

const onFinish = (values: any) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
export default function LienHe() {
  return (
    <section className="section">
      <div className="bg_section">
        <Grid container spacing={1} className="grid_top">
          <Grid xs={5} className="col-left">
            <div className="text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              quidem vero quibusdam exercitationem ea, consectetur odit enim
              natus voluptas molestiae sunt, laboriosam temporibus iure debitis
              dolore perferendis cupiditate hic sint tempora quia animi magni
              illum repellendus mollitia. Debitis suscipit voluptates sed quas
              quasi numquam eum, est hic corrupti, unde cumque neque eligendi
              alias, laudantium iure. Dicta cumque tempora dolorum nihil
              consequatur, totam cum, optio nesciunt veritatis nam, quae quod
              sed blanditiis necessitatibus temporibus ducimus perferendis?
              Natus expedita illum nobis, tempore atque reiciendis qui at
              ducimus corrupti, itaque et dolore delectus voluptatum. Fugit
              ipsum sint expedita odio perferendis recusandae omnis harum?
            </div>
          </Grid>
          <Grid xs={5} className="col-right">
            <div className="form">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
              >
                <Form.Item
                  label="Tên"
                  name="ten"
                  rules={[
                    { required: true, message: "Hãy điền thông tin đầy đủ !" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Hãy điền thông tin đầy đủ !" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Số Điện thoại"
                  name="soDienThoai"
                  rules={[
                    { required: true, message: "Hãy điền thông tin đầy đủ !" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Lời Nhắn">
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Gửi
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Grid>
        </Grid>
        {/*  */}
        <div className="contact">
          <Grid container spacing={3} className="grid_bot">
            <Grid item xs className="left">
              <div className="content">
                <div className="text">Điều Hướng</div>
                <ul className="ul">
                  <li className="li">Trang chủ</li>
                  <li className="li">Về chúng tôi</li>
                  <li className="li">Liên hệ</li>
                  <NavLink to="tel:0898084812">0898084812</NavLink>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} className="mid">
              <div className="text-center content">
                <div className="img">
                  <img className="w-50" src={logo} alt="" />
                </div>
                <div className="lorem p-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  quasi unde quisquam fuga labore quidem doloribus tenetur est
                  blanditiis deserunt.
                </div>
                <div className="form">
                  <form className="d-flex flex-column align-items-center">
                    <input
                      type="email"
                      name="email"
                      value=""
                      size="60"
                      className="form_dang_ky"
                      id="email"
                      aria-required="true"
                      aria-invalid="false"
                      placeholder="Email ..."
                    />
                    <br />
                    <input
                      className="btn"
                      type="submit"
                      value="Đăng ký"
                      id="btn-gui"
                    />
                  </form>
                </div>
              </div>
            </Grid>
            <Grid item xs className="right">
              <div className="content">
                <div className="text-center">Thông tin liên hệ</div>
                <ul className="text-left ul">
                  <li className="li">
                    <i className=" ms-2 fa-solid fa-location-dot" />
                    <span className="ms-1">Nhà của toy ^.^</span>
                  </li>
                  <li className="li">
                    <i className=" ms-2 fa-solid fa-envelope" />
                    <span className="ms-1">Ydang454@gmail.com</span>
                  </li>
                  <li className="li">
                    <i className=" ms-2 fa-solid fa-phone" />
                    <span className="ms-1">0889 268 205</span>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
}
