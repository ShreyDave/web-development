package com.example.unitcovert;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    private Button button;
    private TextView textView;
    private EditText editText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        button = findViewById(R.id.button);
        textView = findViewById(R.id.textView);
        editText = findViewById(R.id.editText);
//        button.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
////                Toast.makeText(MainActivity.this, "value to nakh hopara", Toast.LENGTH_SHORT).show();
//                String s = editText.getText().toString();
//                int km = Integer.parseInt(s);
//                double mile = 0.621371*km;
//                textView.setText("The corresponding value in KMs is = " + mile);
//
//            }
//        });
        }
        public void calculate(View view){
        String s = editText.getText().toString();
        int km = Integer.parseInt(s);
        double mile = 0.621371*km;
        textView.setText("The corresponding value in mile is = "+ mile);
            Toast.makeText(this, "Thanks for using app", Toast.LENGTH_SHORT).show();
        }

    }
