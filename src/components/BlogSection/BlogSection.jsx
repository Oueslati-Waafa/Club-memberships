import React from "react";
import "./BlogSection.css";
import blog_img1 from "../../assets/blog_img1.png";
import blog_img2 from "../../assets/blog_img2.jpg";
import blog_img3 from "../../assets/blog_img3.png";
import blog_img4 from "../../assets/blog_img4.png";

export default function BlogSection() {
  const blogs = [
    {
      img: blog_img1,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img2,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img3,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img4,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img1,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img2,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img3,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
    {
      img: blog_img4,
      title: "CSC beitreten: 5 Tipps für den richtigen Social Club",
      date: "15 Juni",
      desc: "Mittlerweile stehen immer mehr Vereine in den Startlöchern – und das ohne…",
      categ: "Regulierung",
    },
  ];
  return (
    <main className="blog_container container">
      <h1 className="fw-bold">Aktuelle Beiträge</h1>
      <div className="blog_cards row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-5">
        {blogs.map((blg, index) => (
          <div className="blog_card" key={index}>
            <div className="blog_card_img border rounded-5 mb-3">
              <p className="blog_card_date p-1 text-light m-0">
                <span className="fw-semibold lh-1 blog_card_date_day">15</span>
                <span className="blog_card_date_month">Juni</span>
              </p>
              <img
                src={blg.img}
                alt="blog"
                className="img-fluid border rounded-5"
              />
            </div>
            <div className="blog_card_text text-start ps-3">
              <p className="blog_card_categ">{blg.categ}</p>
              <h3 className="blog_card_title">{blg.title}</h3>
              <p className="blog_card_desc">{blg.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
