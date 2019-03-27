        function readTblValues()
        {
            var TableData = '';
    
            $('#tbTableValues').val('');    // clear textbox
            $('#sampleTbl tr').each(function(row, tr){
                TableData = TableData 
                    + $(tr).find('td:eq(0)').text() + ' '  // Task No.
                    + $(tr).find('td:eq(1)').text() + ' '  // Date
                    + $(tr).find('td:eq(2)').text() + ' '  // Description
                    + $(tr).find('td:eq(3)').text() + ' '  // Task
                    + '\n';
            });
            $('#tbTableValues').val(TableData);
        }

        function storeAndShowTableValues()
        {
            var TableData;
            TableData = storeTblValues();
            $('#tbTableValuesArray').val('TableData = \n' + print_r(TableData));
        }
        function storeTblValues()
        {
            var TableData = new Array();
    
            $('#sampleTbl tr').each(function(row, tr){
                TableData[row]={
                    "taskNo" : $(tr).find('td:eq(0)').text()
                    , "date" :$(tr).find('td:eq(1)').text()
                    , "description" : $(tr).find('td:eq(2)').text()
                    , "task" : $(tr).find('td:eq(3)').text()
                }
            }); 
            TableData.shift();  // first row will be empty - so remove
            return TableData;
        }
            
        function convertArrayToJSON()
        {
            var TableData;
            TableData = $.toJSON(storeTblValues());
            $('#tbConvertToJSON').val('JSON array: \n\n' + TableData.replace(/},/g, "},\n"));
                

        }
        function sendTblDataToServer()
        {
            var TableData;
            TableData = $.toJSON(storeTblValues());
            $('#tbSendTblDataToServer').val('JSON array to send to server: \n\n' + TableData.replace(/},/g, "},\n"));
                
            $.ajax({
                type: "POST",
                url: "//www.fourfront.us/resources/processJSONArray.php",
                data: "pTableData=" + TableData,

                success: function(msg){
                    // return value stored in msg variable 
                    $('#tbServerResponse').val('Server Response:\n\n' + msg);
                }
            });
        }
            
        function print_r(arr,level) {
            var dumped_text = "";
            if(!level) level = 0;

            //The padding given at the beginning of the line.
            var level_padding = "";
            for(var j=0;j<level+1;j++) level_padding += "    ";

            if(typeof(arr) == 'object') { //Array/Hashes/Objects 
                for(var item in arr) {
                    var value = arr[item];

                    if(typeof(value) == 'object') { //If it is an array,
                        dumped_text += level_padding + "'" + item + "' \n";
                        dumped_text += print_r(value,level+1);
                    } else {
                        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
                    }
                }
            } else { //Stings/Chars/Numbers etc.
                dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
            }
            return dumped_text;
        }
