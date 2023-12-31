PGDMP     !                 
    {         
   onlineshop    15.5    15.5 S    c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    16398 
   onlineshop    DATABASE     ~   CREATE DATABASE onlineshop WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE onlineshop;
                postgres    false            �            1259    16399    basket_products    TABLE     �   CREATE TABLE public.basket_products (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "basketId" integer,
    "productId" integer
);
 #   DROP TABLE public.basket_products;
       public         heap    postgres    false            �            1259    16402    basket_products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.basket_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.basket_products_id_seq;
       public          postgres    false    214            g           0    0    basket_products_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.basket_products_id_seq OWNED BY public.basket_products.id;
          public          postgres    false    215            �            1259    16403    baskets    TABLE     �   CREATE TABLE public.baskets (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer
);
    DROP TABLE public.baskets;
       public         heap    postgres    false            �            1259    16406    baskets_id_seq    SEQUENCE     �   CREATE SEQUENCE public.baskets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.baskets_id_seq;
       public          postgres    false    216            h           0    0    baskets_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.baskets_id_seq OWNED BY public.baskets.id;
          public          postgres    false    217            �            1259    16407    brands    TABLE     �   CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    16410    brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          postgres    false    218            i           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          postgres    false    219            �            1259    16411    product_infos    TABLE       CREATE TABLE public.product_infos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.product_infos;
       public         heap    postgres    false            �            1259    16416    product_infos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_infos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.product_infos_id_seq;
       public          postgres    false    220            j           0    0    product_infos_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.product_infos_id_seq OWNED BY public.product_infos.id;
          public          postgres    false    221            �            1259    16417    products    TABLE     Y  CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    volume integer NOT NULL,
    img character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "typeId" integer,
    "brandId" integer
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16422    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    222            k           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    223            �            1259    16423    ratings    TABLE     �   CREATE TABLE public.ratings (
    id integer NOT NULL,
    rating character varying(255) DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "userId" integer,
    "productId" integer
);
    DROP TABLE public.ratings;
       public         heap    postgres    false            �            1259    16427    ratings_id_seq    SEQUENCE     �   CREATE SEQUENCE public.ratings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.ratings_id_seq;
       public          postgres    false    224            l           0    0    ratings_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.ratings_id_seq OWNED BY public.ratings.id;
          public          postgres    false    225            �            1259    16428    type_brands    TABLE     �   CREATE TABLE public.type_brands (
    id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "brandId" integer,
    "typeId" integer
);
    DROP TABLE public.type_brands;
       public         heap    postgres    false            �            1259    16431    type_brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.type_brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.type_brands_id_seq;
       public          postgres    false    226            m           0    0    type_brands_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.type_brands_id_seq OWNED BY public.type_brands.id;
          public          postgres    false    227            �            1259    16432    types    TABLE     �   CREATE TABLE public.types (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.types;
       public         heap    postgres    false            �            1259    16435    types_id_seq    SEQUENCE     �   CREATE SEQUENCE public.types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.types_id_seq;
       public          postgres    false    228            n           0    0    types_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.types_id_seq OWNED BY public.types.id;
          public          postgres    false    229            �            1259    16436    users    TABLE     '  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    password character varying(255),
    role character varying(255) DEFAULT 'USER'::character varying,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16442    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    230            o           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    231            �           2604    16443    basket_products id    DEFAULT     x   ALTER TABLE ONLY public.basket_products ALTER COLUMN id SET DEFAULT nextval('public.basket_products_id_seq'::regclass);
 A   ALTER TABLE public.basket_products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    16444 
   baskets id    DEFAULT     h   ALTER TABLE ONLY public.baskets ALTER COLUMN id SET DEFAULT nextval('public.baskets_id_seq'::regclass);
 9   ALTER TABLE public.baskets ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216            �           2604    16445 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    218            �           2604    16446    product_infos id    DEFAULT     t   ALTER TABLE ONLY public.product_infos ALTER COLUMN id SET DEFAULT nextval('public.product_infos_id_seq'::regclass);
 ?   ALTER TABLE public.product_infos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220            �           2604    16447    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    222            �           2604    16448 
   ratings id    DEFAULT     h   ALTER TABLE ONLY public.ratings ALTER COLUMN id SET DEFAULT nextval('public.ratings_id_seq'::regclass);
 9   ALTER TABLE public.ratings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    16449    type_brands id    DEFAULT     p   ALTER TABLE ONLY public.type_brands ALTER COLUMN id SET DEFAULT nextval('public.type_brands_id_seq'::regclass);
 =   ALTER TABLE public.type_brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    226            �           2604    16450    types id    DEFAULT     d   ALTER TABLE ONLY public.types ALTER COLUMN id SET DEFAULT nextval('public.types_id_seq'::regclass);
 7   ALTER TABLE public.types ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    229    228            �           2604    16451    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    230            O          0    16399    basket_products 
   TABLE DATA           `   COPY public.basket_products (id, "createdAt", "updatedAt", "basketId", "productId") FROM stdin;
    public          postgres    false    214   (b       Q          0    16403    baskets 
   TABLE DATA           I   COPY public.baskets (id, "createdAt", "updatedAt", "userId") FROM stdin;
    public          postgres    false    216   Eb       S          0    16407    brands 
   TABLE DATA           D   COPY public.brands (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    218   bb       U          0    16411    product_infos 
   TABLE DATA           Y   COPY public.product_infos (id, title, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    220   �b       W          0    16417    products 
   TABLE DATA           o   COPY public.products (id, name, price, volume, img, "createdAt", "updatedAt", "typeId", "brandId") FROM stdin;
    public          postgres    false    222   �b       Y          0    16423    ratings 
   TABLE DATA           ^   COPY public.ratings (id, rating, "createdAt", "updatedAt", "userId", "productId") FROM stdin;
    public          postgres    false    224   �c       [          0    16428    type_brands 
   TABLE DATA           X   COPY public.type_brands (id, "createdAt", "updatedAt", "brandId", "typeId") FROM stdin;
    public          postgres    false    226   �c       ]          0    16432    types 
   TABLE DATA           C   COPY public.types (id, name, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    228   �c       _          0    16436    users 
   TABLE DATA           T   COPY public.users (id, email, password, role, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    230   od       p           0    0    basket_products_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.basket_products_id_seq', 1, false);
          public          postgres    false    215            q           0    0    baskets_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.baskets_id_seq', 1, false);
          public          postgres    false    217            r           0    0    brands_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.brands_id_seq', 2, true);
          public          postgres    false    219            s           0    0    product_infos_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.product_infos_id_seq', 1, false);
          public          postgres    false    221            t           0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 19, true);
          public          postgres    false    223            u           0    0    ratings_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.ratings_id_seq', 1, false);
          public          postgres    false    225            v           0    0    type_brands_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.type_brands_id_seq', 1, false);
          public          postgres    false    227            w           0    0    types_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.types_id_seq', 6, true);
          public          postgres    false    229            x           0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 1, false);
          public          postgres    false    231            �           2606    16453 $   basket_products basket_products_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT basket_products_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT basket_products_pkey;
       public            postgres    false    214            �           2606    16455    baskets baskets_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT baskets_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.baskets DROP CONSTRAINT baskets_pkey;
       public            postgres    false    216            �           2606    16457    brands brands_name_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_name_key UNIQUE (name);
 @   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_name_key;
       public            postgres    false    218            �           2606    16459    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    218            �           2606    16461 +   product_infos product_infos_description_key 
   CONSTRAINT     m   ALTER TABLE ONLY public.product_infos
    ADD CONSTRAINT product_infos_description_key UNIQUE (description);
 U   ALTER TABLE ONLY public.product_infos DROP CONSTRAINT product_infos_description_key;
       public            postgres    false    220            �           2606    16463     product_infos product_infos_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.product_infos
    ADD CONSTRAINT product_infos_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.product_infos DROP CONSTRAINT product_infos_pkey;
       public            postgres    false    220            �           2606    16465 %   product_infos product_infos_title_key 
   CONSTRAINT     a   ALTER TABLE ONLY public.product_infos
    ADD CONSTRAINT product_infos_title_key UNIQUE (title);
 O   ALTER TABLE ONLY public.product_infos DROP CONSTRAINT product_infos_title_key;
       public            postgres    false    220            �           2606    16467    products products_name_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_name_key UNIQUE (name);
 D   ALTER TABLE ONLY public.products DROP CONSTRAINT products_name_key;
       public            postgres    false    222            �           2606    16469    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    222            �           2606    16471    ratings ratings_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.ratings DROP CONSTRAINT ratings_pkey;
       public            postgres    false    224            �           2606    16473 *   type_brands type_brands_brandId_typeId_key 
   CONSTRAINT     v   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_typeId_key" UNIQUE ("brandId", "typeId");
 V   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_brandId_typeId_key";
       public            postgres    false    226    226            �           2606    16475    type_brands type_brands_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT type_brands_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT type_brands_pkey;
       public            postgres    false    226            �           2606    16477    types types_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.types DROP CONSTRAINT types_name_key;
       public            postgres    false    228            �           2606    16479    types types_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.types
    ADD CONSTRAINT types_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.types DROP CONSTRAINT types_pkey;
       public            postgres    false    228            �           2606    16481    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    230            �           2606    16483    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    230            �           2606    16484 -   basket_products basket_products_basketId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES public.baskets(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Y   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_basketId_fkey";
       public          postgres    false    3227    214    216            �           2606    16489 .   basket_products basket_products_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.basket_products
    ADD CONSTRAINT "basket_products_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 Z   ALTER TABLE ONLY public.basket_products DROP CONSTRAINT "basket_products_productId_fkey";
       public          postgres    false    214    222    3241            �           2606    16494    baskets baskets_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.baskets
    ADD CONSTRAINT "baskets_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.baskets DROP CONSTRAINT "baskets_userId_fkey";
       public          postgres    false    216    230    3255            �           2606    16499    products products_brandId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE SET NULL;
 J   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_brandId_fkey";
       public          postgres    false    222    218    3231            �           2606    16504    products products_typeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT "products_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE SET NULL;
 I   ALTER TABLE ONLY public.products DROP CONSTRAINT "products_typeId_fkey";
       public          postgres    false    3251    222    228            �           2606    16509    ratings ratings_productId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_productId_fkey" FOREIGN KEY ("productId") REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE SET NULL;
 J   ALTER TABLE ONLY public.ratings DROP CONSTRAINT "ratings_productId_fkey";
       public          postgres    false    3241    222    224            �           2606    16514    ratings ratings_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.ratings
    ADD CONSTRAINT "ratings_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE SET NULL;
 G   ALTER TABLE ONLY public.ratings DROP CONSTRAINT "ratings_userId_fkey";
       public          postgres    false    230    3255    224            �           2606    16519 $   type_brands type_brands_brandId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES public.brands(id) ON UPDATE CASCADE ON DELETE CASCADE;
 P   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_brandId_fkey";
       public          postgres    false    218    3231    226            �           2606    16524 #   type_brands type_brands_typeId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.type_brands
    ADD CONSTRAINT "type_brands_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES public.types(id) ON UPDATE CASCADE ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.type_brands DROP CONSTRAINT "type_brands_typeId_fkey";
       public          postgres    false    3251    228    226            O      x������ � �      Q      x������ � �      S   S   x�3��H�KQ��L�(�4202�54�52U00�2��21�371�60�#�e��Y���Pb�`haedle`�gnj��C�+F��� �E<      U      x������ � �      W   �   x�}�9�0@�z|
z4�,o'��4�؉D��E(#$~���n��G�,����i`2*�ȜXZ�m��,���AH�Q�BԵv�X��d�np�;�F`��Vߐ�CI�z��ڦgr�~�ʅk��Yb�r�~��{���I1�      Y      x������ � �      [      x������ � �      ]   �   x�}�=
1��z��eCf&?���Vl���`k�)�U�0��(��,�/�06�ͽ�� C�(�ײS��%�����M����*1�y%�ʳ�D�!�xE���l�����5�����=��_�&��UP�%�	��1|�U��b�,���*L5 �y{�      _      x������ � �     