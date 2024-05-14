import React from 'react';
import { Link } from 'react-router-dom';
import Post from '../Components/ArticlePage/Post';
import Header from '../Components/HomeScreen/Header';
import RelatedPost from '../Components/ArticlePage/RelatedPost';
import ArticleFooter from '../Components/ArticlePage/ArticleFooter';
import SideColumn from '../Components/ArticlePage/SideColumn';

const post = {
    title: "The Drapery Styles of Youths on Ancient Greek Reverses: Exploring Variations and Sub-divisions",
    date: "10 Apr 2024",
    time: "10:30 a.m",
    author: "Sam Althony",
    image1: 'https://www.thoughtco.com/thmb/fr9nygnqPPF40EhO5aV90AcUK0Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Greek-statues-3b432ff0727c4cd983f027614e6832b9.jpg',
    content: `
      <p>The youths on the reverses fall into two main types:</p>
      <p>(A) fully-draped, in which the body is more or less completely enveloped in the himation, though one or both hands may emerge from it, and sometimes part of the shoulder and one arm;</p>
      <p>(B) half-draped, in which the himation is drawn across the midriff, leaving the upper part of the body exposed, although at times it may be draped over one shoulder, in which case only about three-quarters of the torso is visible.</p>
      <p>These two main types fall into a number of sub-divisions of which the following are the most frequently found:</p>
      <h2>A. Fully-draped</h2>
      <ol>
        <li>'Sling'-drape, preferred for youths facing to right. The right arm is bent at the elbow and is extended in a slightly upwards direction beneath the cloak, giving it something of the appearance of being confined in a sling. The left hand is concealed beneath the drapery; the right hand may also be concealed, but may also be visible outside the 'sling' (r), in which case it will usually be holding some object, like a spray, a fillet, a ball or a 'skewer of fruit'.</li>
        <li>'Sleeve' drape, preferred for youths facing to left. The left arm is akimbo, with the himation over it assuming the appearance of a sleeve, the effect of which is heightened by the striped border of the cloak running round the outer edge of the 'sleeve'. The right hand is normally visible (r), projecting slightly outward from beneath the cloak and often holding some object, but it may also be concealed within the cloak.</li>
        <li>The 'V or 'U' drape, used for youths facing in either direction.
          <ul>
            <li>The body is normally shown in a near-frontal view, with the head in profile to right or left. The himation is draped over both shoulders so as to leave a V- or U-shaped opening over the chest, and this is emphasised by the presence of the black or dot-stripe border of the cloak. With this draping, both hands are normally concealed (c), but sometimes the left hand is visible (1), usually holding some object. The right hand is very seldom visible (r; Copenhagen 8377, Paestum 31728, Berlin F3050, and Copenhagen 257 B); when it is, just the hand appears at the bottom of the U, the arm being concealed by the drapery. There are no extant examples of this drape with both hands visible.</li>
          </ul>
        </li>
      </ol>
      <h2>B. Half-draped</h2>
      <p>The half-draped youth appears more frequently on the left, facing to right, but may also be found facing in the other direction.</p>
      <p>The himation is normally draped horizontally across the middle of the body, so as to leave the torso completely bare; sometimes it is draped over one shoulder and down the corresponding side of the body. Both hands (v) or either the right (r) or the left (1) may be visible, but as yet there are no examples of both being concealed. Either or both hands may hold different objects.</p>
      <p>With all drapings, the youths may wear leafy wreaths in added white round their heads.</p>
      <p>The following designations are used to characterise the various types of draping which appear on the youths on the reverses; the youth on the left side (i.e. facing right) is always given first.</p>
    `
};


function Article() {
    return (
        <div className="app">
            <img className="background-behind" src="assets\images\fixed-background.jpg" alt="" />
            <Header />
            <div className="app__container">
                <div className="background--black">
                    <div className="grid-container">
                    
                        <div className='post-container'>
                            
                            <div className='post-section'>
                                
                                <Post
                                    title={post.title}
                                    content={post.content}
                                    date={post.date}
                                    author={post.author}
                                    time={post.time}
                                    image1={post.image1}
                                />
                                <ArticleFooter />
                            </div>

                            <SideColumn />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Article;
