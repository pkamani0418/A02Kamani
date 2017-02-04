


function calculate() 
{
    var TaxAmount= (0.1);
    var Itemcost= (5.0); 
    // var NoofItems = document.getElementsById("NOI").value;
    var NoofItems = 6.0;
    //var x = parseInt(NoofItems)*parseInt(Itemcost);
   var x = NoofItems*Itemcost;
    var Totalamount  = x+ TaxAmount;
    document.getElementById("totalamount").value = "$" +Totalamount;
}
// var list = document.getElementById("list1");
// var checkboxes = document.getElementsByTagName("input"),
// var Totalamount =document.getElementsByName("Total Amount"),
// var SubTotal = document.getElementById("sub_total");
// // var INPUT1 = document.getElementsByName("INPUT1")[0];
// // var INPUT2 = document.getElementsByName("INPUT2")[0];
// // var INPUT3 = document.getElementsByName("INPUT3")[0];
// // var INPUT4 = document.getElementsByName("INPUT4")[0];
// // var INPUT5 = document.getElementsByName("INPUT5")[0];
// // var INPUT6 = document.getElementsByName("INPUT6")[0];
// // var INPUT7 = document.getElementsByName("INPUT7")[0];
// // var TotalAmount = document.getElementsByName("Total Amount")[0];

// for(var i = 0; i < checkboxes.length; i++)
// {
//     checkboxes[i].onchange = function()
//     {
//         get_SubTotal();
//     }
// }


// function get_SubTotal()
// {
//     var d_sub_total = 0.0,
//         d_total_amount = 0.0;
         

//     for(var i = 1; i <= checkboxes.length; i++)
//     {
//         //If the checkbox is checked, add it to the total
//         if(checkboxes[i-1].checked)
//         {
//             d_sub_total += i * Itemcost;
//         }
//     }
//     d_total_amount = d_sub_total+(d_sub_total*tax);
// }
// function calculate()
//  {
// var el, i = 0;
// var total = 0;
// while(el = document.getElementsByName("INPUT")[i++])
//  {
// if(el.checked)
//  {
//       total=Itemcost*NoofItems+TaxAmount;
//     }
// }
// //alert(total);
// div.innerHTML = "Total : " +total ;
// }
