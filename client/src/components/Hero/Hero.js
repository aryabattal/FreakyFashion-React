const Hero =({heading, description, imageUrl}) =>(
    
<div class="hero-container">
    <div class="v-container">
    <article>
        <h3>{heading}</h3>
        <p>
           {description}
        </p>

        <a class="" href="">
            <input type="submit" value="Click here" class="submit-btn" />
        </a>
    </article>
</div>
<div class="v-container align-items-central ">
    <img src={imageUrl} alt="hero image" width="700" height="300" />
</div>
</div>
);
export default Hero;