var ExcelToJSON = function() {

    this.parseExcel = function(file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var data = e.target.result;
            var workbook = XLSX.read(data, {
                type: 'binary'
            });
            workbook.SheetNames.forEach(function(sheetName) {
                // Here is your object
                var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
                var json_object = JSON.stringify(XL_row_object);
                var data = JSON.parse(json_object);
                writeToDattabase(data);
            })
        };

        reader.onerror = function(ex) {
            console.log(ex);
        };

        reader.readAsBinaryString(file);
    };
};

function handleFileSelect(e) {

    // var files = evt.target.files; // FileList object
    // var xl2json = new ExcelToJSON();
    // xl2json.parseExcel(files[0]);


    for(let i=0; i<e.target.files.length; i++) {
        let csv_file = e.target.files[i]; // FileList object
        // let xl2json = new ExcelToJSON();
        // let value = xl2json.parseExcel(files[0]);
        console.log('upload is paused'+status);
        console.log('upload is paused'+csv_file);

        let status_field = document.getElementById('upload_status').textContent="Running";
        let csv_ref = firebase.storage().ref('student-csv '+ csv_file.name);
        let uploadFile = csv_ref.put(csv_file);

        uploadFile.on('state_changed', function progress(snapshot) {
            let percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log('upload is ' + percent);
            if(percent == '100'){
                let status_field = document.getElementById('upload_status').textContent="Upload Done";
            }
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED :
                    console.log('upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING :
                    console.log('upload is running');
                    break;
            }

            
        });
    }
}


function handleFileSelect2(e) {

    // var files = evt.target.files; // FileList object
    // var xl2json = new ExcelToJSON();
    // xl2json.parseExcel(files[0]);


    for(let i=0; i<e.target.files.length; i++) {
        let csv_file = e.target.files[i]; // FileList object
        // let xl2json = new ExcelToJSON();
        // let value = xl2json.parseExcel(files[0]);
        console.log('upload is paused'+status);
        console.log('upload is paused'+csv_file);

        let status_field = document.getElementById('upload_status2').textContent="Running";
        let csv_ref = firebase.storage().ref('student-csv '+ csv_file.name);
        let uploadFile = csv_ref.put(csv_file);

        uploadFile.on('state_changed', function progress(snapshot) {
            let percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log('upload is ' + percent);
            if(percent == '100'){
                let status_field = document.getElementById('upload_status2').textContent="Upload Done";
            }
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED :
                    console.log('upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING :
                    console.log('upload is running');
                    break;
            }

            
        });
    }
}


function handleFileSelect3(e) {

    // var files = evt.target.files; // FileList object
    // var xl2json = new ExcelToJSON();
    // xl2json.parseExcel(files[0]);


    for(let i=0; i<e.target.files.length; i++) {
        let csv_file = e.target.files[i]; // FileList object
        // let xl2json = new ExcelToJSON();
        // let value = xl2json.parseExcel(files[0]);
        console.log('upload is paused'+status);
        console.log('upload is paused'+csv_file);

        let status_field = document.getElementById('upload_status3').textContent="Running";
        let csv_ref = firebase.storage().ref('student-csv '+ csv_file.name);
        let uploadFile = csv_ref.put(csv_file);

        uploadFile.on('state_changed', function progress(snapshot) {
            let percent = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log('upload is ' + percent);
            if(percent == '100'){
                let status_field = document.getElementById('upload_status3').textContent="Upload Done";
            }
            switch(snapshot.state){
                case firebase.storage.TaskState.PAUSED :
                    console.log('upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING :
                    console.log('upload is running');
                    break;
            }

            
        });
    }
}


var database = firebase.database();

function writeToDattabase(data) {
    console.log(data);

    firebase.database().ref('student').set(data);
}