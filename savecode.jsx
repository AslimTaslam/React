
{viewRandomPlanet}
<div className='row mb2 button-row'>
          <ErrorButton />
          <ToggleComponent onView={this.onViewComponent} />
        </div>
        
        <PeoplePage />
        
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList 
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanet}
              renderItem={(item) => (<span>{item.name}<button>?</button></span>)}/>
          </div>
          <div className='col-md-6'>
            
          </div>
        </div>
        
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList 
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarship}
              renderItem={(item) => item.name}/>
          </div>
          <div className='col-md-6'>
                    
          </div>
        </div>