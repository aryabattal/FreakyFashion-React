const Statistics = ( {statistics}) => {
return(
    <div class="spots-container">
             {  statistics.map (x => (
    <a class="spots-img" href="@spotsLink.Url">
        <div class="image-container">
            <img class="spots-img" src={x.spotsimageUrl} width="370" height="1000" />
            <p class="spots-title"> {x.spotsLabel}</p>

        </div>
      
    </a>
      ))}
</div>
)
}

export default Statistics;