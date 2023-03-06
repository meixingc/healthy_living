

export default function WorkoutCategory(props) {
    
   if (props.chosenWorkoutId) {
    return (
        <div>
            <h1> categories</h1>
        </div>
    )
   }
   else {
    return(
<h1> loading</h1>
    )
    
   }
}