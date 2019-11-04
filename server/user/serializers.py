from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
        ]

class UserListSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(
        view_name='users-api:detail',
        lookup_url_kwarg='user_id'
    )

    class Meta:
        model = User
        fields = [
            'url',
            'id',
            'email',
            'is_admin',
            'username',
        ]

        
class UserDetailSeiralizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
        ]

class UserCreateSerializer(serializers.ModelSerializer):
    token = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'token',
            'email',
            'username',
            'password',
        ]
        extra_kwargs = {"password":{"write_only": True}}

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token
    
    def create(self, vaildated_data):
        email = vaildated_data['email']
        username = vaildated_data['username']
        password = vaildated_data['password']
        user_obj = User(
            email = email,
            username = username
        )
        user_obj.set_password(password)
        user_obj.save()
        return user_obj


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, read_only=True)
    email = serializers.EmailField(label='Email')
    
    class Meta:
        model = User
        fields = [
            'email',
            'password',
            'token',
        ]
        extra_kwargs = {"password":{"write_only": True}}
    
    def validate(self, data):
        user_obj = None
        email = data.get('email', None)
        password = data['password']
        
        if not email:
            raise serializers.VaildationError("Email is required")

        try:
            user = User.objects.get(email=email)
        except BaseException as e:
            raise serializers.ValidationError("Email is not valid.")
        else:
            user_obj = user
            
        if user_obj:
            if not user_obj.check_password(password):
                raise serializers.ValidationError("Password is not valid")
        
        return data
    
