import React from 'react';

class RegistrationForm extends React.Component{


    render(){
        return (

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                 aria-labelledby="exampleModal" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLable">Modal title</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="modal-body">
                                <p>Hello world</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

                export default RegistrationForm;

