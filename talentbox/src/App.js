import logo from './logo.svg';
import './App.css';

function App() {

  const handlesubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const values = Object.fromEntries(data.entries());
    console.log(values)



    try {
      let res = fetch("https://localhost:8001/v1jobs/job", {
        method: "POST",
        body: JSON.stringify({
         values
        }),
      });
    }
    catch (err) {
      console.log(err);
    }
    alert("Check console for formdata");

  };

  const softwaredomain = [
    "System Software",
    "Firmware",
    "Programming Software",
    "Driver Software",
    "Freeware",
    "Shareware",
    "Open Source Software",
    "Closed Source Software",
    "Utility Software]",
    "Application Software",
  ];
  return (
    <div className="Container">
      <div className='form-cont'>
        <b>
          Post Job
        </b>
        <span className='form-heading' > Basic Details</span>
        <form action='localhost:8001/v1jobs/job' method='POST' onSubmit={(e) => {handlesubmit(e)}}>
          <label for="Title" >
            Job Title*
          </label>
          <input required placeholder='Write a title that appropriately describes this job' type='text' name='Title'></input>
          <label for="Location">
            Location*
          </label>


          <input required placeholder="+Add Location" type='text' name='Location'></input>

          <div className='split'>
            <div>
              <label for="MinExp">
                Min Exp*
              </label>
              <input required name='MinExp' className='inpsplit' placeholder='Select Min' type="number" list="exp" />
              <datalist id="exp">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>

              </datalist>
            </div>
            <div>
              <label for="MaxExp">
                Max Exp*
              </label>
              <input required name='MaxExp' className='inpsplit' placeholder='Select Max' type="number" list="exp" />
              <datalist id="exp">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                <option>10+</option>
                <option>15+</option>

              </datalist>
            </div>
          </div>




          <label >
            Job Descption
          </label>


          <textarea required name='description' placeholder='Describe the role and responsibilities ' rows='10' resize> </textarea>
          <span className='form-heading' > Targetting</span>


         

          <div className='split'>
            <div>
              <label for="functionalarea">
                Functional Area*
              </label>
              <input required name='functionalarea' className='inpsplit'  type="text"  />
            
            </div>
            <div>
              <label for="Category">
                Category*
              </label>
              <input required name='category' className='inpsplit' placeholder='Select' type="text" list="category" />
              <datalist id="category">
                {softwaredomain.map((domain) => <option> {domain}</option>) }
                </datalist>
            </div>
          </div>


          <label for="Tags" >
            Tags*
          </label>
          <input required placeholder='+Add tags' type='text' name='tags'></input>
         
          <button type='submit'>Post Job</button>
        </form>
      </div>

    </div>
  );
}

export default App;
