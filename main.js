para_1_array = [];
   
function para_1()
{
    var display_para_1_array = [];

    for (var j = 1; j <= 6; j++)
    {
        var para_1 = document.getElementById("div_1_input_"+j).value;
        console.log(para_1);
       para_1_array.push(para_1);
    }

    console.log(para_1_array);

    var lenght_of_para_1_array = para_1_array.length;
    console.log(lenght_of_para_1_array);

    for (var k = 0; k < lenght_of_para_1_array; k++)
    {
        display_para_1_array.push(para_1_array[k]);
        console.log(display_para_1_array);
    }

    console.log(display_para_1_array);

    var remove_commas = display_para_1_array.join(" ");
    console.log(remove_commas);
    document.getElementById("get_para_1").innerHTML = remove_commas;
}
para_2_array = [];
   
function para_2()
{
    var display_para_2_array = [];

    for (var j = 1; j <= 6; j++)
    {
        var para_2 = document.getElementById("div_2_input_"+j).value;
        console.log(para_2);
       para_2_array.push(para_2);
    }

    console.log(para_2_array);

    var lenght_of_para_2_array = para_2_array.length;
    console.log(lenght_of_para_2_array);

    for (var k = 0; k < lenght_of_para_2_array; k++)
    {
        display_para_2_array.push(para_2_array[k]);
        console.log(display_para_2_array);
    }

    console.log(display_para_2_array);

    var remove_commas = display_para_2_array.join(" ");
    console.log(remove_commas);
    document.getElementById("get_para_2").innerHTML = remove_commas;
}