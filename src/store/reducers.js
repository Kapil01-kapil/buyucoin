import produce from 'immer';
import {

    getHomes,
getDetails
} from './actions';
import { isEmpty } from 'lodash';
export const initialState = {

   getHomeData :null,
   getHomeLoading : false,
   getHomeFailure : null,

   getDetailsData :null,
   getDetailsLoading : false,
   getDetailsFailure : null,
   
};


export default (state = initialState, action) =>
   produce(state, (draft) => {
       console.log("draftdraftdraft==>", state);
       switch (action.type) {
          
     
         //home date

         case getHomes.TRIGGER: {
            draft.getHomeLoading = true
            break;
        }
        case getHomes.SUCCESS: {
            
            const data = action.payload
        
            draft.getHomeData  = action.payload; 
            console.log("data======>", draft.getHomeData);
            draft.getHomeLoading = false
         
            break;
        } 
        case getHomes.FULFILL : {
            draft.getHomeLoading = false
            
            break;
        }
        case getHomes.FAILURE : {
            draft.getHomeLoading = false
            draft.getHomeFailure = action.payload;
            break;
        }

      







     

         // Get All loaction city wise when user register first time

         case getDetails.TRIGGER: {
            draft.getDetailsLoading = true
            break;
        }
        case getDetails.SUCCESS: {
            const data = action.payload
           
            draft.getDetailsData  = action.payload; 
        
            draft.getDetailsLoading = false
         
            break;
        } 
        case getDetails.FULFILL : {
            draft.getDetailsLoading = false
            
            break;
        }
        case getDetails.FAILURE : {
            draft.getDetailsLoading = false
            draft.getDetailsFailure = action.payload;
            break;
        }






          
       }
   });